import type { BlogType, ReadFolderType, TagType } from "src/types";

export const TAG_DATA: TagType[] = [
  {
    id: 1,
    tagItem: "swr",
    count: 6,
    createdAt: "2020-11-01 10:00",
    updatedAt: "2020-11-01 10:00",
  },
  {
    id: 2,
    tagItem: "redux",
    count: 120,
    createdAt: "2020-11-02 10:00",
    updatedAt: "2020-11-02 10:00",
  },
  {
    id: 3,
    tagItem: "TypeScript",
    count: 20,
    createdAt: "2020-11-03 10:00",
    updatedAt: "2020-11-03 10:00",
  },
  {
    id: 4,
    tagItem: "tailwind css",
    count: 24,
    createdAt: "2020-11-04 10:00",
    updatedAt: "2020-11-04 10:00",
  },
];
export const FOLDER1_DATA: ReadFolderType[] = [
  {
    id: 1,
    folderName: "react",
    index: 1,
    level: 1,
    index1: 1,
    index2: 0,
  },
  {
    id: 2,
    folderName: "python",
    index: 2,
    level: 1,
    index1: 2,
    index2: 0,
  },
  {
    id: 3,
    folderName: "クラウド関係",
    index: 3,
    level: 1,
    index1: 3,
    index2: 0,
  },
];
export const FOLDER2_DATA: ReadFolderType[] = [
  {
    id: 4,
    folderName: "react",
    index: 1,
    level: 2,
    index1: 1,
    index2: 1,
  },
  {
    id: 5,
    folderName: "Next.js",
    index: 2,
    level: 2,
    index1: 1,
    index2: 2,
  },
  {
    id: 6,
    folderName: "dango",
    index: 1,
    level: 2,
    index1: 2,
    index2: 1,
  },
  {
    id: 7,
    folderName: "flask",
    index: 2,
    level: 2,
    index1: 2,
    index2: 2,
  },
  {
    id: 8,
    folderName: "pytorch",
    index: 3,
    level: 2,
    index1: 2,
    index2: 3,
  },
  {
    id: 9,
    folderName: "AWS",
    index: 1,
    level: 2,
    index1: 3,
    index2: 1,
  },
  {
    id: 10,
    folderName: "Azure",
    index: 2,
    level: 2,
    index1: 3,
    index2: 2,
  },
  {
    id: 11,
    folderName: "GCP",
    index: 3,
    level: 2,
    index1: 3,
    index2: 3,
  },
];

export const BLOG_DATA: BlogType[] = [
  {
    id: 1,
    title: "React使ってみた",
    content: `Reactの3つの特徴
1.Declarative : 宣言的な
2.Component Based : コンポーネントベースである
3.Learn Once,Write AnyWhere : 一度覚えてしまえばどこにだって書ける`,
    createdAt: "2021/1/1",
  },
  {
    id: 2,
    title: "Next.jsを使うべき5つの理由",
    content: `1.SSR/SSG
2.ファイルベースルーティング
3.開発サーバの部分的な高速リロード(Fast Refresh)
4.画像最適化
5.ゼロコンフィグ`,
    createdAt: "2021/1/1",
  },
];
