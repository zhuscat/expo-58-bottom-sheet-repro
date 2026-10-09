# [@expo/ui] BottomSheet content is clipped on iPhone Duo (iOS 27.1)

## Minimal reproducible example

TODO: Add the public reproduction repository URL.

Confirmed in a minimal Expo 58 project using `@expo/ui/community/bottom-sheet`, default dynamic sizing (no `snapPoints`), and a single React Native `Text` inside `BottomSheetView` with `padding: 24`. See `App.tsx`.

## Steps to reproduce

1. Run `pnpm install` and `pnpm ios --device`.
2. Select iPhone Duo with iOS 27.1.
3. Tap **Open**.

**Expected:** The full text `This sheet sizes itself to its content.` is visible with 24pt padding.

**Actual:** The beginning of the text is clipped at the sheet's left edge. The same issue occurs in the minimal reproduction.

The original app showed clipping in both narrow and wide iPhone Duo configurations, but worked on iPhone 18 / iOS 27.0. That comparison has not been repeated in the minimal project.

### Screenshots

TODO: Upload the two screenshots to GitHub and replace these local links.

![Narrow configuration](/tmp/expo-bottom-sheet-issue-draft/iphone-duo-narrow.png)
![Wide configuration](/tmp/expo-bottom-sheet-issue-draft/iphone-duo-wide.png)

## Environment

- Affected: iPhone Duo simulator, iOS 27.1 (24A94232)
- Xcode: 27.1 RC (27A9275)
- `@expo/ui`: 58.0.14
- `expo-dev-client`: 58.0.11
- Package manager: pnpm 10.32.1

```text
expo-env-info 2.1.0 environment info:
  System:
    OS: macOS 27.0
    Shell: 5.9 - /bin/zsh
  Binaries:
    Node: 24.21.0 - ~/.nvm/versions/node/v24.21.0/bin/node
    npm: 11.19.0 - ~/.nvm/versions/node/v24.21.0/bin/npm
  Managers:
    CocoaPods: 1.16.2 - ~/.rbenv/shims/pod
  SDKs:
    iOS SDK:
      Platforms: DriverKit 27.0, iOS 27.1, macOS 27.0, tvOS 27.0, visionOS 27.0, watchOS 27.0
  IDEs:
    Android Studio: 2026.1 AI-261.26222.65.2613.15948027
    Xcode: 27.1/27A9275 - /usr/bin/xcodebuild
  npmPackages:
    expo: 58.0.6 => 58.0.6
    react: 19.3.0 => 19.3.0
    react-native: 0.88.0-rc.3 => 0.88.0-rc.3
  Expo Workflow: managed
```

## Expo Doctor Diagnostics

`pnpm dlx expo-doctor@latest`:

```text
Running 20 checks on your project...
20/20 checks passed. No issues detected!
```
