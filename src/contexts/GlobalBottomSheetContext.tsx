import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useRef,
} from "react";
import {
  BottomSheetModalProvider,
  BottomSheetModal,
  BottomSheetView,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";

type ContextValue = {
  present: (Component: React.ReactNode) => void;
  close: () => void;
};

const BottomSheetContext = createContext<ContextValue | null>(null);

export const useGlobalBottomSheet = () => {
  const ctx = useContext(BottomSheetContext);
  if (!ctx)
    throw new Error(
      "useGlobalBottomSheet must be used within a BottomSheetContext"
    );
  return ctx;
};

type GlobalBottomSheetProviderProps = {
  children: ReactNode;
};

export const GlobalBottomSheetProvider = ({
  children,
}: GlobalBottomSheetProviderProps) => {
  const modalRef = useRef<BottomSheetModal>(null);

  const present = useCallback((content: React.ReactNode) => {
    setContent(content);
    modalRef.current?.present();
  }, []);

  const close = useCallback(() => modalRef.current?.close(), []);

  const [content, setContent] = React.useState<React.ReactNode>(null);

  return (
    <BottomSheetContext.Provider value={{ present, close }}>
      <BottomSheetModalProvider>
        {children}
        <BottomSheetModal
          ref={modalRef}
          snapPoints={["90%"]}
          enablePanDownToClose
          backgroundStyle={{ backgroundColor: "black" }}
          handleIndicatorStyle={{
            backgroundColor: "white",
          }}
          onDismiss={close}
          backdropComponent={(props) => (
            <BottomSheetBackdrop
              {...props}
              disappearsOnIndex={-1}
              appearsOnIndex={0}
            />
          )}
        >
          <BottomSheetView>{content}</BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </BottomSheetContext.Provider>
  );
};
