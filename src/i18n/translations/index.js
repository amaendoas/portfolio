import engHome from '../../pages/Home/home-eng.js';
import ptBrHome from '../../pages/Home/home-pt-br.js';
import languageSwitchEng from '../../components/LanguageSwitch/languageSwitch-eng.js';
import languageSwitchPtBR from '../../components/LanguageSwitch/languageSwitch-ptBR.js';
import headerPtBR from '../../components/Header/header-ptBr.js';
import headerEng from '../../components/Header/header-eng.js';
import aboutEng from '../../pages/About/about-eng.js';
import aboutPtBr from '../../pages/About/about-ptBR.js';
import contactEng from '../../pages/Contact/contact-eng.js';
import contactPtBr from '../../pages/Contact/contact-ptBr.js';
import projectsEng from '../../utils/projects-eng.js';
import projectsPtBr from '../../utils/projects-ptBr.js';
import stackEng from "../../pages/Stack/stack-eng.js"
import stackPtBr from '../../pages/Stack/stack-ptBr.js';

export const languages = {
  eng: {
    translation: {
      ...engHome,
      ...languageSwitchEng,
      ...headerEng,
      ...aboutEng,
      ...contactEng,
      ...projectsEng,
      ...stackEng
    }
  },
  ptBr: {
    translation: {
      ...ptBrHome,
      ...languageSwitchPtBR,
      ...headerPtBR,
      ...aboutPtBr,
      ...contactPtBr,
      ...projectsPtBr,
      ...stackPtBr
    }
  }
};
