export const Crisp = () => {

    window.$crisp = []

    window.CRISP_WEBSITE_ID = '77656419-ec18-4eff-bc6b-84c7e2ebefa0';

    (() => {

        const d = document
        const s = d.createElement ('script')

        s.src = 'https://client.crisp.chat/l.js'

        s.async = true

        d.getElementsByTagName ('head')[0].appendChild (s)

    }) ()

}