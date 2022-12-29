export interface IAbstractFormValues {
  scriptFormat: string;
  storyFormat: string;
  title: string;
  primaryGenre: string;
  secondaryGenre: string;
  storyTopics: string[];
  primaryCast: string;
  secondaryCast: string;
  estimatedBudget: string;
  tagline: string;
  logLine: string;
  synopsis: string;
  storyWorld: string;
  actStructure?: string;
  characterBible: string;
  inspiration: string;
  motivation: string;
  adaptionPermission: FileList;
  image: FileList;
  scriptFile: FileList;
  scriptCopyright: FileList;
  draft: string;
}
