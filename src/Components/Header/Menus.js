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
    id: "essay",
    name: "수필인의 방",
    s_name: "수필",
    icon: <EssayIcon />,
  },
  {
    id: "poem",
    name: "시인의 방",
    s_name: "시",
    icon: <PoemIcon />,
  },
  {
    id: "dream",
    name: "꿈일기의 방",
    s_name: "꿈일기",
    icon: <NovelIcon />,
  },
  {
    id: "review",
    name: "리뷰방(책, 영화)",
    s_name: "리뷰",
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
