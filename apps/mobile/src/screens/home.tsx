import React from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useAuth } from "@clerk/clerk-expo";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlashList } from "@shopify/flash-list";
import type { inferProcedureOutput } from "@trpc/server";
import type { AppRouter } from "@unit/api";

import { trpc } from "../utils/trpc";

const SignOut = () => {
    const { signOut } = useAuth();
    return (
        <View className="rounded-lg border-2 border-gray-500 p-4">
            <Button
                title="Sign Out"
                onPress={() => {
                    void signOut();
                }}
            />
        </View>
    );
};

const WorkoutCard: React.FC<{
    workout: inferProcedureOutput<AppRouter["workout"]["all"]>[number];
}> = ({ workout }) => {
    return (
        <View className="rounded-lg border-2 border-gray-500 p-4">
            <Text className="text-xl font-semibold text-[#cc66ff]">{workout.title}</Text>
        </View>
    );
};

const CreateWorkout: React.FC = () => {
    const utils = trpc.useContext();
    const { mutate } = trpc.workout.create.useMutation({
        async onSuccess() {
            await utils.workout.all.invalidate();
        },
    });

    const [title, onChangeTitle] = React.useState("");
    const [content, onChangeContent] = React.useState("");

    return (
        <View className="flex flex-col border-t-2 border-gray-500 p-4">
            <TextInput
                className="mb-2 rounded border-2 border-gray-500 p-2 text-white"
                onChangeText={onChangeTitle}
                placeholder="Title"
            />
            <TextInput
                className="mb-2 rounded border-2 border-gray-500 p-2 text-white"
                onChangeText={onChangeContent}
                placeholder="Content"
            />
            <TouchableOpacity
                className="rounded bg-[#cc66ff] p-2"
                onPress={() => {
                    mutate({
                        title,
                    });
                }}
            >
                <Text className="font-semibold text-white">Publish workout</Text>
            </TouchableOpacity>
        </View>
    );
};

export const HomeScreen = () => {
    const workoutQuery = trpc.workout.all.useQuery();
    const [showWorkout, setShowWorkout] = React.useState<string | null>(null);

    return (
        <SafeAreaView className="bg-[#2e026d] bg-gradient-to-b from-[#2e026d] to-[#15162c]">
            <View className="h-full w-full p-4">
                <Text className="mx-auto pb-2 text-5xl font-bold text-white">
                    Create <Text className="text-[#cc66ff]">Unit</Text> Turbo
                </Text>

                <View className="py-2">
                    {showWorkout ? (
                        <Text className="text-white">
                            <Text className="font-semibold">Selected workout:</Text>
                            {showWorkout}
                        </Text>
                    ) : (
                        <Text className="font-semibold italic text-white">Press on a workout</Text>
                    )}
                </View>

                <FlashList
                    data={workoutQuery.data}
                    estimatedItemSize={20}
                    ItemSeparatorComponent={() => <View className="h-2" />}
                    renderItem={(p) => (
                        <TouchableOpacity onPress={() => setShowWorkout(p.item.id)}>
                            <WorkoutCard workout={p.item} />
                        </TouchableOpacity>
                    )}
                />

                <CreateWorkout />
                <SignOut />
            </View>
        </SafeAreaView>
    );
};
