FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageResize,
    FilePondPluginFileEncode
)

FilePond.setOptions({
    stylePanelAspectRatio: 200 / 200,
    imageResizeTargetWidth: 200,
    imageResizeTargetHeight: 200
})

FilePond.parse(document.body);