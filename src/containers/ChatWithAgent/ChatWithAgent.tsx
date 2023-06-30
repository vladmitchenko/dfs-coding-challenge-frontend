import { FC, Fragment, ReactElement, useEffect, useState } from 'react'
import { useFetch } from 'use-http'
import { Chat } from '../../components/Chat/Chat'
import { ChatMessage } from '../../components/ChatMessage'

type Props = {
    onClose: () => void
}

type Agent = {
    id: number
    name: string
}

type Topic = {
    id: number
    name: string
    children: Topic[]
}

const apiBaseUrl = 'http://localhost:3001'

export const ChatWithAgent: FC<Props> = (props: Props): ReactElement => {
    const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
    const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null)
    const { data: agents } = useFetch(`${apiBaseUrl}/users/available-agents`, [])
    const { data: topics } = useFetch(`${apiBaseUrl}/topics`, [])

    useEffect(() => {
        if (Array.isArray(agents) && agents.length > 0) {
            setTimeout(() => setSelectedAgent(agents[0]), 3000) // just to show loading state
        }
    }, [agents])

    useEffect(() => {
        if (Array.isArray(topics) && topics.length > 0) {
            setSelectedTopic({ id: 0, name: 'root', children: topics })
        }
    }, [topics])

    return (
        <Chat
            title={selectedAgent ? `Chat with ${selectedAgent.name}` : 'Chat support'}
            loading={!selectedAgent || !selectedTopic}
            loadingText='Connecting to agent...'
            onClose={props.onClose}
        >
            {!selectedTopic ? '' : (
                selectedTopic.children.length > 0 ? (
                    <Fragment>
                        <ChatMessage>Please select topic to speak about:</ChatMessage>
                        {selectedTopic.children.map((topic: Topic) => (
                            <ChatMessage key={topic.id} onClick={() => setSelectedTopic(topic)}>
                                {topic.name}
                            </ChatMessage>
                        ))}
                    </Fragment>
                ) : (
                    <ChatMessage>Thank you for your answers</ChatMessage>
                )
            )}
        </Chat>
    )
}