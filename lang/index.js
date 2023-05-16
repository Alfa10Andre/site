import en_GB from './en_GB'
import pt_MZ from './pt_MZ'
import pt_PT from './pt_PT'
import app from '~/config/app'

export default function langs() {
  const langs = {
    pt_PT,

    en_GB,

    pt_MZ,
  }

  return langs[app().lang]
}
