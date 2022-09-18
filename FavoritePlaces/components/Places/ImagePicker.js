import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { useState } from "react";
import { Colors } from "../../constants/Colors";
import OutlinedButton from "../UI/OutlinedButton";

export default function ImagePicker() {
  const [imagePreview, setImagePreview] = useState();
  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();

  async function verifyPermissions() {
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient permissions",
        "You need to grant camera permission"
      );
      return false;
    }

    return true;
  }

  async function takeImageHandler() {
    const hasPremission = await verifyPermissions();

    if (!hasPremission) {
      return;
    }

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    console.log(image.uri);
    setImagePreview(image.uri);
  }

  let imageTaken = <Text> No image taken.</Text>;

  if (imagePreview) {
    imageTaken = <Image style={styles.image} source={{ uri: imagePreview }} />;
  }

  return (
    <View>
      <View style={styles.imagePreview}>{imageTaken}</View>
      <OutlinedButton icon="camera" onPress={takeImageHandler}>
        Take Image
      </OutlinedButton>
    </View>
  );
}

const styles = StyleSheet.create({
  imagePreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
