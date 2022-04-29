import React, { useTransition } from 'react';
import { useTranslation, i18n } from 'react-i18next';


import { View, Text, Button, StyleSheet } from 'react-native';


export const Settings = ({ count, lang, dispatch }) => {

    const { t, i18n } = useTranslation(); 
    const isCurrentLang = (_lang) => _lang === lang ? true : false;
    const setLang = (_lang) => {
        dispatch({ type: _lang});
        i18n.changeLanguage(_lang);
        
    }; 

    return (
        <View style={styles.bg}>
            <Text style={styles.TextSettings}>SETTINGS</Text>
            <Text style={styles.TextSettings}>Count: {count}</Text>
            <Button   color="black" title="Increment" onPress={() => dispatch({ type: 'INCREMENT'}  )}  />
            <Button style={styles.btn2} color="black" title="Decrement" onPress={() => dispatch({ type: 'DECREMENT'} )} />
            <Button style={styles.btn2} color="black" title={t("Finnish")} onPress={() =>  setLang('FI')} disabled={isCurrentLang('FI')}/>
            <Button  color="black" style={styles.btn2} title={t('English')} onPress={() => setLang('EN')} disabled={isCurrentLang('EN')}/>
            

        </View>
    )
}

const styles = StyleSheet.create({
   TextSettings: {
    textAlign: 'center',
    color: 'black',
    fontSize: 20,

    
   },
   btn2: {
       padding: 20,
   },
   bg: {
       height: 400,
       
   }

  });




export default Settings;