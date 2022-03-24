async function getConnectedDevices(type) {
  const devices = await navigator.mediaDevices.enumerateDevices();
  return devices.filter(device => device.kind === type)
}

// Open camera with at least minWidth and minHeight capabilities
async function openCamera(cameraId) {
    const constraints = {
        'video': {
            'deviceId': cameraId
            }
        }

    return await navigator.mediaDevices.getUserMedia(constraints);
}

async function playLocal(selector) {
  try {
    const cameras = await getConnectedDevices('videoinput');
    if (cameras && cameras.length > 0) {
        const stream = await openCamera(cameras[0].deviceId);
        const videoElement = document.querySelector(selector);
        videoElement.srcObject = stream;
    }
  } catch (e) {
    console.error(e);
  }
}
