# react-native-expo-stack-navigator

install node

```
npm install --global yarn
yarn global add expo
yarn global add expo-cli
```

add C:\Users\<user>\AppData\Local\Yarn\bin to system environment variables

```
expo init
```

cd into app

```
yarn add react-native-web react-dom @expo/webpack-config
yarn add @react-navigation/web
    - allows browser support for navigation links in the url
yarn add expo-router
yarn web
```

```
npx create-react-native-app -t with-router
```

user snippets
"React Native Functional Component": {
"prefix": "rnfc",
"body": [
"import React from 'react';",
"import { StyleSheet, Text, View } from 'react-native';",
"",
"// interface Props {}",
"",
"export default function ${ComponentName}(): JSX.Element {",
" return (",
" <View style={styles.container}>",
" <Text>${ComponentName}</Text>",
" </View>",
" );",
"}",
"",
"const styles = StyleSheet.create({",
" container: {",
" flex: 1,",
" }",
"});",
""
]
},
