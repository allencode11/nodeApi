export interface ICategoryData {
  name: string,
};

export interface ICategory {
  name: string,
  id: number,
};

export interface IUserSkillsData {
  userId: number,
  skillId: number,
};

export interface ISkillsData {
  categoryId: number,
  name: string,
};

export interface IUserData {
  firstName: string,
  lastName: string,
  email: string,
  avatar: string,
  description:string,
};

export interface ISearchData {
  firstName: string,
  lastName: string,
  email: string,
  avatar: string,
  description:string,
  skills: ICategoryData[],
}