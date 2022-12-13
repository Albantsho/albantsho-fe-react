export interface IAbstractFormValues {
  script_type: string;
  storyFormat: string;
  title: string;
  primary_genre: string;
  secondary_genre: string;
  theme: [{ label: string }];
  primary_cast: string;
  secondary_cast: string;
  estimated_budger: string;
  tagline: string;
  log_line: string;
  synopsis: string;
  story_world: string;
  act_structure?: string;
  character_bible: string;
  inspiration: string;
  motivation: string;
  copyright: string;
  image: FileList;
  scriptFile: FileList;
  scriptCopyright: FileList;
  otherDraft: string;
}
