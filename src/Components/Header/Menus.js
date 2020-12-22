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
    icon: <EssayIcon />,
  },
  {
    id: "poem",
    name: "시인의 방",
    icon: <PoemIcon />,
  },
  {
    id: "dream",
    name: "꿈의 방",
    icon: <NovelIcon />,
  },
  {
    id: "review",
    name: "리뷰(책, 영화)",
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
