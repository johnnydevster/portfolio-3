import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function SocialWidget({ className = "" }) {
  const iconClasses = "text-4xl text-slate-200 block";
  return (
    <section className="section h-[200px] flex-grow-0 sticky inline-block top-header-lg bg-slate-dark p-4 ">
      <LinkedInIcon classes={{ root: iconClasses }} />
      <GitHubIcon classes={{ root: iconClasses }} />
    </section>
  );
}
