# Expo 58 BottomSheet reproduction

Minimal reproduction of left-side text clipping in `@expo/ui/community/bottom-sheet` on iPhone Duo running iOS 27.1. Confirmed by running this project.

## Run

```sh
pnpm install
pnpm ios --device
```

Select the iPhone Duo simulator with iOS 27.1, then tap **Open**. Use `pnpm start` to restart Metro after the initial build.

**Expected:** The full text `This sheet sizes itself to its content.` appears with 24pt padding.

**Actual:** The beginning of the text is clipped at the sheet's left edge.

`App.tsx` contains a single dynamically sized sheet with React Native text. No snap points or width adjustments are applied. Device orientation changes are allowed.

## Versions

- Expo: 58.0.6
- `@expo/ui`: 58.0.14
- React: 19.3.0
- React Native: 0.88.0-rc.3
- `expo-dev-client`: 58.0.11
- pnpm: 10.32.1
- Xcode: 27.1 RC (27A9275)

## Checks

```sh
pnpm run ts:check
pnpm run lint
pnpm dlx expo-doctor@latest
```

TypeScript and ESLint passed. Expo Doctor reported: `20/20 checks passed. No issues detected!`
