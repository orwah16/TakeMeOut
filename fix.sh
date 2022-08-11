#!/bin/bash

echo 'Fixing PropTypes issues'

if grep -q "export const ViewPropTypes = { style: null };" ./node_modules/react-native-web/dist/index.js; then
    echo "ViewPropTypes fixed already!"
else
    echo "\nexport const ViewPropTypes = { style: null };">> ./node_modules/react-native-web/dist/index.js
fi