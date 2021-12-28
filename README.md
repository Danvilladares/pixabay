# pixabay
pixabay react native
Register your API Key at https://pixabay.com/

make 'api.js' in pixabay folder and add:
export const API_URL = 'https://pixabay.com/api/';
export const API_KEY = --API KEY from pixabay.com-- ;
export const API_PAGE = '200';


to install
on parent directory

# Install dependencies
yarn install

# ios:
cd ios

pod install

cd .. (cd parent directory)

# ios:
react-native run-ios


# android:
yarn android

# android:
react-native run-ios
