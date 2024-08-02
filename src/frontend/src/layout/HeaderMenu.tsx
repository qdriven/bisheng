import { TabIcon } from "@/components/bs-icons";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router-dom";

export default function HeaderMenu({ }) {
    const { t } = useTranslation()
    const location = useLocation();
    console.log('location.pathname :>> ', location.pathname);

    if (!['/build/assist', '/build/skills', '/build/tools'].includes(location.pathname)) return null

    return <div className="build-tab flex justify-center h-[65px] items-center relative">
        <div className="px-4">
            <NavLink to={'build/assist'} className="group flex gap-2 items-center px-8 py-2 rounded-md navlink">
                <TabIcon className="text-muted-foreground group-hover:text-primary dark:group-hover:text-[#fff]"></TabIcon>
                <span className="text-sm font-bold text-muted-foreground group-hover:text-primary dark:group-hover:text-[#fff]">{t('build.assistant')}</span>
            </NavLink>
        </div>
        <div className="px-4">
            <NavLink to={'build/skills'} className="group flex gap-2 items-center px-8 py-2 rounded-md navlink">
                <TabIcon className="text-muted-foreground group-hover:text-primary dark:group-hover:text-[#fff]"></TabIcon>
                <span className="text-sm font-bold text-muted-foreground group-hover:text-primary dark:group-hover:text-[#fff]">{t('build.skill')}</span>
            </NavLink>
        </div>
        <div className="px-4">
            <NavLink to={'build/tools'} className="group flex gap-2 items-center px-8 py-2 rounded-md navlink">
                <TabIcon className="text-muted-foreground group-hover:text-primary dark:group-hover:text-[#fff]"></TabIcon>
                <span className="text-sm font-bold text-muted-foreground group-hover:text-primary dark:group-hover:text-[#fff]">{t('build.tools')}</span>
            </NavLink>
        </div>
    </div>
};
