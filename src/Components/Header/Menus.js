import {
  EssayIcon,
  NovelIcon,
  PoemIcon,
  ProfileIcon,
  ReviewIcon,
  WritingIcon,
} from "../Icons/Icons";

export const categories = [
  {
    id: "poem",
    name: "시",
    icon: <PoemIcon />,
  },
  {
    id: "novel",
    name: "소설",
    icon: <NovelIcon />,
  },
  {
    id: "essay",
    name: "수필",
    icon: <EssayIcon />,
  },
  {
    id: "review",
    name: "리뷰",
    icon: <ReviewIcon />,
  },
];

export const myMenu = [
  {
    id: "posting",
    name: "글쓰기",
    icon: <WritingIcon />,
  },
  {
    id: "profile",
    name: "내 정보",
    icon: <ProfileIcon />,
  },
];
