import React, {useEffect} from 'react';
import {Modal, Alert, View, Image} from 'react-native';
import {useState} from 'react';
import ButtonPaper from '@components/Button/button';
import {useTheme, Text as PaperText} from 'react-native-paper';
import makeStyles from './RNModalError.style';
import {useSelector} from 'react-redux';
import AppDispatcher from '@redux/Dispatchers/AppDispatcher';

function RNModal() {
  const [modalVisible, setModalVisible] = useState(false);
  const theme = useTheme();
  const styles = makeStyles(theme);
  const dataError = useSelector((store: any) => store?.app?.error);

  function handleCloseModal() {
    setModalVisible(!modalVisible);
    AppDispatcher.setErrorMessage('');
  }

  useEffect(() => {
    if (dataError?.errorMessage) {
      setModalVisible(true);
    } else {
      setModalVisible(false);
    }
  }, [dataError?.errorMessage]);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Image
            style={styles.imageError}
            source={require('../../assets/error.png')}
          />
          <PaperText style={styles.modalText} variant="bodySmall">
            {dataError ? dataError?.errorMessage : ''}
          </PaperText>
          <View style={styles.buttonAlign}>
            <ButtonPaper
              textStyle={styles.textStyle}
              style={{padding: 0, width: 'auto'}}
              onPress={handleCloseModal}>
              Ok
            </ButtonPaper>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default RNModal;
