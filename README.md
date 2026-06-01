# AWS Sample Website

This is a small static website sample that you can deploy to AWS.

## Files

- `index.html` — landing page markup
- `styles.css` — page styling
- `script.js` — simple theme toggle and button interaction

## Deploy to AWS S3

1. Create an S3 bucket in the AWS Console.
2. Enable static website hosting for the bucket.
3. Upload `index.html`, `styles.css`, and `script.js` to the bucket.
4. Set the bucket policy to allow public read access for objects.
5. Use the bucket website endpoint to view the site.

### Example S3 bucket policy

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::YOUR_BUCKET_NAME/*"
    }
  ]
}
```

## Deploy to AWS Amplify

1. Open AWS Amplify in the console.
2. Choose **Deploy** and connect your repository if needed.
3. Use the default build settings for a static site.
4. Amplify will host the files and provide a public URL.

## Notes

- This is a static site only; no backend is required.
- You can replace the content with your own branding and pages.
