export type RootStackParamList = {
  Main: undefined;
  Detail: { id: string; title: string };
};

export type TabParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
};

export type NavigationProps = {
  navigation: any;
  route: any;
}; 