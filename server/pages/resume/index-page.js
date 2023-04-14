import { j as jsx, F as Fragment, a as jsxs } from "../../chunks/ac9dafa4.js";
import React from "react";
import ReactMarkdown from "react-markdown";
import "react/jsx-runtime";
function Header({ basicInfo }) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("header", { className: "grid grid-cols-1 grid-rows-3 items-center justify-between sm:grid-cols-6 sm:grid-rows-1 print:grid-cols-6 print:grid-rows-1", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "order-3 mt-4 justify-self-center text-lg\n        sm:order-none sm:col-start-1 sm:col-end-2 sm:mt-auto sm:justify-self-start sm:text-sm\n        print:order-none print:col-start-1 print:col-end-2 print:mt-auto print:justify-self-start print:text-sm",
        children: /* @__PURE__ */ jsxs(Address, { children: [
          basicInfo.phone,
          " ",
          /* @__PURE__ */ jsx("br", {}),
          " ",
          basicInfo.address
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "order-2 mt-6 justify-self-center\n        sm:order-none sm:col-start-2 sm:col-end-6 sm:mt-auto\n        print:order-none print:col-start-2 print:col-end-6 print:mt-auto",
        children: /* @__PURE__ */ jsx("h1", { className: "title text-6xl tracking-tighter", children: /* @__PURE__ */ jsx(NameKerned, { kernedLetters: basicInfo.nameKerned }) })
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "order-1 justify-self-center\n        sm:relative sm:order-none sm:justify-self-auto\n        print:relative print:order-none print:justify-self-auto",
        children: /* @__PURE__ */ jsx("div", { className: "sm:absolute sm:-top-12 sm:right-4 print:absolute print:-top-12 print:right-4", children: /* @__PURE__ */ jsx(ProfilePicture, { image: basicInfo.image }) })
      }
    )
  ] }) });
}
function NameKerned({ kernedLetters }) {
  const title = kernedLetters.map((letter, index) => {
    return typeof letter === "string" ? /* @__PURE__ */ jsx("span", { children: letter }, index) : /* @__PURE__ */ jsx("span", { style: { letterSpacing: letter.letterSpacing }, children: letter.character }, index);
  });
  return /* @__PURE__ */ jsx(Fragment, { children: title });
}
function Address({ children }) {
  return /* @__PURE__ */ jsx("address", { className: "not-italic leading-5", children });
}
function ProfilePicture({ image }) {
  return /* @__PURE__ */ jsx("img", { className: "h-24 w-24 rounded-full", src: image });
}
const iconsPath = "/assets/static/bootstrap-icons.5cd238ca.svg";
function Icon({ src, width, height, className }) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      className: `${className}`,
      width,
      height,
      style: { minWidth: `${width}px`, minHeight: `${height}px` },
      fill: "currentColor",
      children: /* @__PURE__ */ jsx("use", { xlinkHref: `${iconsPath}#${src}` })
    }
  );
}
function AddressBar({ links }) {
  const NavLinks = links.map((link, index) => {
    return /* @__PURE__ */ jsxs(React.Fragment, { children: [
      /* @__PURE__ */ jsx(NavLink, { href: link.url, icon: link.icon, children: link.username }, index),
      links.length - 1 !== index && /* @__PURE__ */ jsx("span", { className: "invisible sm:visible print:visible", children: "|" })
    ] }, index);
  });
  return /* @__PURE__ */ jsx("address", { className: "mb-4 mt-10 flex w-full flex-col flex-wrap items-center justify-between text-base not-italic sm:flex-row print:flex-row", children: NavLinks });
}
function NavLink({ href, icon, children }) {
  return /* @__PURE__ */ jsxs("a", { href, target: "_blank", className: "flex flex-row items-center gap-2", children: [
    /* @__PURE__ */ jsx(Icon, { src: icon, width: 12, height: 12 }),
    children
  ] });
}
function SectionContainer({ title, children }) {
  return /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-xl uppercase", children: title }),
    /* @__PURE__ */ jsx("span", { className: "mb-1 block h-0.5 w-full bg-black" }),
    children
  ] });
}
var ListType = /* @__PURE__ */ ((ListType2) => {
  ListType2[ListType2["BULLET"] = 0] = "BULLET";
  ListType2[ListType2["CHECKMARK"] = 1] = "CHECKMARK";
  return ListType2;
})(ListType || {});
function SectionList({ type, points }) {
  const icon = type === 0 ? "dot" : "check-circle-fill";
  const ListMembers = points.map((content, index) => {
    return /* @__PURE__ */ jsxs(
      "li",
      {
        className: "flex flex-row items-start gap-2 leading-[1.52rem]",
        children: [
          /* @__PURE__ */ jsx(
            Icon,
            {
              className: `mt-0.5 ${0 === type ? "scale-150" : "text-gray-500"}`,
              src: icon,
              width: 12,
              height: 12
            }
          ),
          /* @__PURE__ */ jsx(ReactMarkdown, { children: content })
        ]
      },
      index
    );
  });
  return /* @__PURE__ */ jsx("ul", { className: "ml-2", children: ListMembers });
}
function SectionSummary({ content }) {
  return /* @__PURE__ */ jsx(Fragment, { children: content && /* @__PURE__ */ jsx(ReactMarkdown, { className: "mb-1", children: content }) });
}
function SectionTags({ tags }) {
  const tagsList = tags.map((tag, index) => {
    return /* @__PURE__ */ jsx(
      "a",
      {
        href: tag.link,
        target: "_blank",
        className: "tag mb-1 mr-1 whitespace-nowrap bg-gray-300 px-2 py-1 text-xs\n      text-gray-700 hover:bg-gray-400 hover:text-gray-800 active:bg-gray-500 active:text-gray-900",
        children: tag.name
      },
      index
    );
  });
  return /* @__PURE__ */ jsx("div", { className: "ml-2 mt-2 flex flex-row flex-wrap", children: tagsList });
}
function SectionTitle({ left, right, middle, middleUrl }) {
  return /* @__PURE__ */ jsxs("div", { className: "mb-1 grid w-full grid-cols-3 font-bold text-gray-700", children: [
    left && /* @__PURE__ */ jsx("h3", { className: "col-start-1 col-end-2 justify-self-start", children: left }),
    middle && /* @__PURE__ */ jsx("h3", { className: "col-start-2 col-end-3 justify-self-center text-lg", children: middleUrl ? /* @__PURE__ */ jsx("a", { href: middleUrl, target: "_blank", children: middle }) : middle }),
    right && /* @__PURE__ */ jsx("h3", { className: "col-start-3 col-end-4 justify-self-end", children: right })
  ] });
}
function EmploymentSection({ work }) {
  const subSections = work.map((job, index) => {
    return /* @__PURE__ */ jsxs("div", { className: "mb-2", children: [
      /* @__PURE__ */ jsx(
        SectionTitle,
        {
          left: job.position,
          middle: job.name,
          middleUrl: job.url,
          right: `${job.startDate} - ${job.endDate}`
        }
      ),
      /* @__PURE__ */ jsx(SectionSummary, { content: job.summary }),
      /* @__PURE__ */ jsx(SectionList, { type: ListType.CHECKMARK, points: job.highlights }),
      /* @__PURE__ */ jsx(SectionTags, { tags: job.keywords })
    ] }, index);
  });
  return /* @__PURE__ */ jsx(SectionContainer, { title: "Employment", children: subSections });
}
function AwardsSection({ awards }) {
  return /* @__PURE__ */ jsx(SectionContainer, { title: "Awards and Most Proud of", children: /* @__PURE__ */ jsx("div", { className: "mb-2", children: /* @__PURE__ */ jsx(SectionList, { type: ListType.BULLET, points: awards }) }) });
}
function EducationSection({ education }) {
  const subSections = education.map((level, index) => {
    return /* @__PURE__ */ jsxs("div", { className: "mb-2", children: [
      /* @__PURE__ */ jsx(
        SectionTitle,
        {
          left: level.area,
          middle: level.institution,
          middleUrl: level.url,
          right: `${level.startDate} - ${level.endDate}`
        }
      ),
      /* @__PURE__ */ jsx(SectionList, { type: ListType.BULLET, points: level.highlights })
    ] }, index);
  });
  return /* @__PURE__ */ jsx(SectionContainer, { title: "Education", children: subSections });
}
function AdditionalExperience({
  additionalExperience
}) {
  return /* @__PURE__ */ jsx(SectionContainer, { title: "Open Source And Volunteering", children: /* @__PURE__ */ jsx("div", { className: "mb-2", children: /* @__PURE__ */ jsx(SectionList, { type: ListType.BULLET, points: additionalExperience }) }) });
}
function ShowcaseLayout({ children }) {
  return /* @__PURE__ */ jsx("div", { className: "print:w-print paper:w-paper mx-auto w-full origin-top font-serif lg:scale-125 xl:scale-150 paper:py-20 print:scale-100", children: /* @__PURE__ */ jsx("div", { className: "paper:h-paper bg-white p-8 pt-10 shadow-none md:p-16 paper:shadow-2xl print:bg-white print:p-16 print:pt-20 print:shadow-none", children }) });
}
function SideTags() {
  const printThis = () => {
    window.print();
  };
  return /* @__PURE__ */ jsxs("div", { className: "fixed top-2 z-10 xl:top-20 print:hidden", children: [
    /* @__PURE__ */ jsxs(SideTag, { onClick: printThis, children: [
      /* @__PURE__ */ jsx(Icon, { src: "printer", width: 12, height: 12, className: "inline" }),
      /* @__PURE__ */ jsx("h5", { className: "hidden lg:inline", children: "Print This" })
    ] }),
    /* @__PURE__ */ jsx("a", { className: "tag", href: "/", children: /* @__PURE__ */ jsxs(SideTag, { children: [
      /* @__PURE__ */ jsx(Icon, { src: "people", width: 12, height: 12, className: "inline" }),
      /* @__PURE__ */ jsx("h5", { className: "hidden lg:inline", children: "Check HoA" })
    ] }) })
  ] });
}
function SideTag({ children, onClick }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      onClick,
      className: "row flex cursor-pointer items-center gap-3 rounded-e-md bg-neutral-700 p-2 text-[1.3rem] text-white drop-shadow-md last:mt-3 md:px-4 print:px-4",
      children
    }
  );
}
function Page({
  basicInfo,
  work,
  awards,
  education,
  additionalExperience
}) {
  const { profiles, ...basicInfoNoProfiles } = basicInfo;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("base", { target: "_blank" }),
    /* @__PURE__ */ jsx(Header, { basicInfo: basicInfoNoProfiles }),
    /* @__PURE__ */ jsx(AddressBar, { links: profiles }),
    /* @__PURE__ */ jsx(EmploymentSection, { work }),
    /* @__PURE__ */ jsx(EducationSection, { education }),
    /* @__PURE__ */ jsx(AwardsSection, { awards }),
    /* @__PURE__ */ jsx(AdditionalExperience, { additionalExperience })
  ] });
}
export {
  ShowcaseLayout as Layout,
  SideTags as OutOfLayout,
  Page
};
