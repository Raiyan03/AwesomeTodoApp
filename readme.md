# Setting up React Native:

## System requirements:

- **CPU**: Dual-core 2 GHz or equivalent
- **RAM**: 4GB or higher
- **Storage**: 10 GB free space
- **Operating Systems**: Windows 10 (64bit) or macOS High Sierra (10.13)

## Installation Instructions:

1. Node Js and Java Development Kit(JDK):
    - Download and install by running the following command `choco install -y nodejs-lts microsoft-openjdk17`
2. Android Studio:
    - Download and install Android Studio from the [Official Website](https://developer.android.com/studio).
    - Follow the setup instructions and install necessary SDK components.
3. React Native CLI:
    - Open a command prompt or terminal and run: `npm install -g react-native-cli`

## Configuration Steps:

1. Enviroment Variable
    - Add The following to your system's PATH:
        - `ANDROID_HOME`
        - `JAVA_HOME`

## Project Creation:

1. Create a new React Native project:
    - If you previously installed a global react-native-cli package, please remove it as it may cause unexpected issues by running:
    ````
    npm uninstall -g react-native-cli @react-native-community/cli
    ````
    * on command prompt run "AwesomeProject" is the project name you can change it as per your choice
    ````
    npx react-native@latest init AwesomeProject
    ````
2. Navigate to the project directory
    ````
    cd MyProject
    ````

## Running the project

1. Run the project on an Android simulator;
    ````code
    npm run android
    ````

## Troubleshooting

### Port already in use

**Issue**: The Metro bundler runs on port 8081, and if another process is using that port, it can cause conflicts.

### Solution:

1. Find the process using port 8081:
    ````
    sudo lsof -i :8081
    ````
2. Terminate the process:
    ````
    kill -9 <PID>
    ````
3. Alternatively, use a different port:
    ````
    npm start -- --port=8088
    ````
### NPM Locking Error

**Issue:** Error like `npm WARN locking Error: EACCES` while using the React Native CLI.

#### Solution:

```
sudo chown -R $USER ~/.npm
sudo chown -R $USER /usr/local/lib/node_modules
```

### Missing Libraries for React

**Issue:** Manual addition of React Native to the project may result in missing dependencies.

#### Solution:

- Verify proper inclusion of dependencies and linkage in Xcode project settings.
- If using CocoaPods, update Podfile:
````
pod 'React', :path => '../node_modules/react-native', :subspecs => [
  'RCTText',
  'RCTImage',
  'RCTNetwork',
  'RCTWebSocket',
]
````

### React Native Does Not Compile When Being Used as a CocoaPod

**Issue:** Compilation issues when React Native is used as a CocoaPod.

#### Solution:

- Use the `cocoapods-fix-react-native` plugin to handle potential post-fixing of source code differences.

### Argument List Too Long: Recursive Header Expansion Failed

**Issue:** Build error due to header search path configuration.

#### Solution:
- Revert User Search Header Paths and Header Search Paths to CocoaPod defaults in Xcode build settings.

### No Transports Available

**Issue:** React Native implements a polyfill for WebSockets, causing issues with other modules requiring WebSockets.

#### Solution:
- Load modules requiring WebSockets after importing React Native in your application.

## Argument List Too Long: Recursive Header Expansion Failed

**Issue:** Build error due to header search path configuration.

**Solution:**
- Revert User Search Header Paths and Header Search Paths to CocoaPod defaults in Xcode build settings.

## No Transports Available

**Issue:** React Native implements a polyfill for WebSockets, causing issues with other modules requiring WebSockets.

**Solution:**
- Load modules requiring WebSockets after importing React Native in your application.

## Shell Command Unresponsive Exception

**Issue:** Exception like `ShellCommandUnresponsiveException` during Gradle execution.

**Solution:**
- Downgrade Gradle version to 1.2.3 in `android/build.gradle`.

## React-native Init Hangs

**Issue:** `npx react-native init` hangs during the project initialization.

**Solution:**
- Run in verbose mode and check #2797 for common causes:
    ```bash
    npx react-native init --verbose
    ```

## Unable to Start React-Native Package Manager (on Linux)

**Issue:** Error "code":"ENOSPC","errno":"ENOSPC".

**Solution:**
- Increase inotify watches limit:
    ```bash
    echo fs.inotify.max_user_watches=582222 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
    ```

## Error: spawnSync ./gradlew EACCES

**Issue:** Error during `npm run android` on macOS.

**Solution:**
- Make `gradlew` files executable:
    ```bash
    sudo chmod +x android/gradlew
    ```

## Resources

1. Official Documentation:
    - [React Native Documentation](https://reactnative.dev/docs/getting-started)
2. Tutorials
    - [React Native Getting Started Guide](https://reactnative.dev/docs/environment-setup)
    - [React Native Tutorial for Beginners](https://www.youtube.com/watch?v=0-S5a0eXPoc)
3. Community Support:
    - [Stack Overflow](https://stackoverflow.com/)
    - [Reactiflux Discord Community](https://discord.com/invite/reactiflux)
