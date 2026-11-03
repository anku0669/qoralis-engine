# macOS installation and Gatekeeper

## What was wrong

The original v2.1.0 desktop DMG was built without a macOS signing identity.
On Apple Silicon, macOS can report an unsigned downloaded Tauri app as
“damaged and can't be opened”. This message is a Gatekeeper/signature failure;
it does not by itself prove the DMG download is corrupt.

## Release fix

Qoralis uses Tauri's ad-hoc signing identity (`-`) for the macOS bundle.
The release workflow verifies the app signature before uploading the DMG.
Ad-hoc signing avoids the damaged-app classification described in the Tauri
macOS signing guide, but it is not a Developer ID identity and it does not
notarize the app.

Because this project is not currently configured with an Apple Developer ID
certificate and notarization credentials, first launch can still require a
one-time user approval.

## First launch

1. Download the macOS ARM64 DMG from the official
   [Qoralis GitHub Release](https://github.com/anku0669/qoralis-engine/releases).
2. Verify its SHA-256 digest against the `Qoralis-Engine-...` line in
   `SHA256SUMS.txt`.
3. Open the DMG and drag **Qoralis Engine.app** to Applications.
4. In Finder, Control-click the app, select **Open**, then confirm **Open**
   in the Gatekeeper prompt. This is a per-app approval, not a reason to
   disable Gatekeeper globally.

If macOS still says the app is damaged after installing the corrected DMG,
do not bypass the warning. Delete that copy, download the DMG again, verify
its SHA-256 digest, and check the published release's signature-verification
result.

## Removing the remaining first-run prompt

A fully seamless distribution requires a paid Apple Developer Program
membership, a **Developer ID Application** certificate, CI secrets for that
certificate, and notarization credentials (preferably an App Store Connect API
key). Tauri documents the required certificate and notarization setup in its
[macOS code-signing guide](https://v2.tauri.app/distribute/sign/macos/).
Once those credentials are available, replace ad-hoc signing with Developer ID
signing and notarize/staple the DMG. Do not store the certificate, private key,
or passwords in the repository.
