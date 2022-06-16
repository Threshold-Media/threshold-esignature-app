const { Storage } = require('@google-cloud/storage')

// Enable Cloud Storage
const gcs = Storage({
  projectId: process.env.NEXT_PUBLIC_GOOGLE_CLOUD_PROJECT,
  keyFilename: process.env.KEY_FILE_PATH
});

// Reference an existing bucket.
const bucket = gcs.bucket('cdn.thresholdmedia.com')

export { bucket }