"use client"

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { useChat } from "ai/react"
import { ScrollArea } from "./ui/scroll-area"

const Chat = () => {
    const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <Card className="w-[500px] rounded">
        <CardHeader>
          <CardTitle>Chat Ai</CardTitle>
          <CardDescription>Using vercel SDK to create a chat bot.</CardDescription>
        </CardHeader>
        <CardContent>
            <ScrollArea className="h-[600px] w-full pr-4">
                {messages.map(message => {
                    return (
                    <div key={message.id} className="flex gap-3 text-slate-600 text-sm mb-4">

                        {message.role === 'user' && (
                            <Avatar>
                                <AvatarFallback>OT</AvatarFallback>
                                <AvatarImage src="https://github.com/T4vexx.png" />
                            </Avatar>
                        )}

                        {message.role === 'assistant' && (
                            <Avatar>
                                <AvatarFallback>IA</AvatarFallback>
                                <AvatarImage src="https://github.com/rocketseat.png" />
                            </Avatar>
                        )}

                        <p className="leading-relaxed">
                            <span className="block font-bold text-slate-700">{message.role === 'user' ? 'Usuário: ' : 'IA: '}</span>
                            {message.content}
                        </p>

                    </div>
                )})}
            </ScrollArea>
        </CardContent>
        <CardFooter >
            <form onSubmit={handleSubmit} className="flex w-full gap-2">
                <Input className="rounded" placeholder="How can i help you"  value={input} onChange={handleInputChange} />

                <Button className="bg-gray-700 text-white rounded"  type="submit">send</Button>
            </form>
        </CardFooter>
      </Card>
  )
}

export default Chat