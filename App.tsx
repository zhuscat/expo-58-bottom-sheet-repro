import { BottomSheet, BottomSheetView } from '@expo/ui/community/bottom-sheet'
import { useRef } from 'react'
import { Button, Text, View, useColorScheme } from 'react-native'

export default function App() {
  const colorScheme = useColorScheme()
  const ink = { color: colorScheme === 'dark' ? '#FFFFFF' : '#000000' }
  const sheetRef = useRef<BottomSheet>(null)

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: 100,
        }}
      />
      <Button title="Open" onPress={() => sheetRef.current?.present()} />

      <BottomSheet ref={sheetRef} index={-1} enablePanDownToClose>
        <BottomSheetView style={{ padding: 24 }}>
          <Text style={ink}>This sheet sizes itself to its content.</Text>
        </BottomSheetView>
      </BottomSheet>
    </View>
  )
}
