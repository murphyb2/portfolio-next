// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

export type User = {
  id: number;
  name: string;
};

export type Project = {
  id: string;
  description: string;
  link: string;
  title: string;
  icon: any;
};

export type About = {
  id: string;
  body: string;
  header: string;
  profilePic: any;
};
