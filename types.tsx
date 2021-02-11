export type RootStackParamList = {
	Root: undefined;
	ChatRoom: undefined;
	NotFound: undefined;
};

export type MainTabParamList = {
	Camera: undefined;
	Chats: undefined;
	Status: undefined;
	Calls: undefined;
};

export type TabOneParamList = {
	TabOneScreen: undefined;
};

export type TabTwoParamList = {
	TabTwoScreen: undefined;
};

export type User = {
	id: String;
	name: String;
	imageUri: String;
};

export type Message = {
	id: String;
	content: String;
	createdAt: number;
	user: User
};

export type ChatRoom = {
	id: number;
	users: User[];
	lastMessage: Message;
};
