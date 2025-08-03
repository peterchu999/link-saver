export type LinkModel = {
  id: number;
  title: string;
  url: string;
  description: string | null;
  favicon: string | null;
};

export type LinkViewModel = Omit<LinkModel, "id">;
