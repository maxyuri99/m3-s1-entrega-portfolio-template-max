import { DefaultTemplate } from "../../components/DefaultTemplate"
import { BannerSection } from "../../components/Sections/BannerSection"
import { AboutMeSection } from "../../components/Sections/AboutMeSection"
import { TechSection } from "../../components/Sections/TechSection"
import { ProjectsSection } from "../../components/Sections/ProjectsSection"

export const HomePage = () => {
    return (
        <DefaultTemplate>
            <BannerSection />
            <AboutMeSection />
            <TechSection />
            <ProjectsSection />
        </DefaultTemplate>
    )
}