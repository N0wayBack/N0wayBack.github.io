export interface Honor {
  id: string;
  name: string;
  date: string;
  rank: string;
  isMilestone?: boolean;
}

export const honors: Honor[] = [
  // TPCTF 比赛数据
  {
    id: "tpctf_2025",
    name: "TPCTF 2025",
    date: "2025-03-08",
    rank: "6th Place",
  },
  // 强网杯 比赛数据
  {
    id: "qiangwangbei_s8_qual",
    name: "强网杯 S8 Qual",
    date: "2024-11-02",
    rank: "8th Place",
    isMilestone: true
  },
  {
    id: "qiangwangbei_s8_final",
    name: "强网杯 S8 Final",
    date: "2024-12-05",
    rank: "9th Place",
    isMilestone: true
  },
  // DASCTF 比赛数据
  {
    id: "dasctf_2024_last",
    name: "DASCTF 2024最后一战",
    date: "2024-12-21",
    rank: "4th Place",
  },
  {
    id: "dasctf_2024_oct",
    name: "DASCTF 2024金秋十月",
    date: "2024-10-19",
    rank: "3rd Place",
  },
  {
    id: "dasctf_2024_summer",
    name: "DASCTF 2024暑期挑战赛",
    date: "2024-07-20",
    rank: "3rd Place",
  },
  {
    id: "dasctf_hdctf_2024",
    name: "DASCTF X HDCTF 2024",
    date: "2024-06-02",
    rank: "4th Place",
  },
  {
    id: "dasctf_gfctf_2024",
    name: "DASCTF X GFCTF 2024",
    date: "2024-04-20",
    rank: "3rd Place",
  },
  // D3CTF 比赛数据
  {
    id: "d3ctf_2024",
    name: "D^3CTF 2024",
    date: "2024-04-07",
    rank: "4th Place",
  },
  // NKCTF 比赛数据
  {
    id: "nkctf_2024",
    name: "NKCTF 2024",
    date: "2024-03-23",
    rank: "Organizer",
  },
  {
    id: "nkctf_2023",
    name: "NKCTF 2023",
    date: "2023-03-24",
    rank: "Organizer",
    isMilestone: true
  },
  // 陇剑杯 比赛数据
  {
    id: "longjian_2023",
    name: "陇剑杯 S2 Qual 社会组",
    date: "2023-08-26",
    rank: "1th Place",
  },
];