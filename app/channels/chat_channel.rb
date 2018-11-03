class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_for 'chat_channel'
    # messages = { messages: Message.all.collect(&:body) }
    # ChatChannel.broadcast_to('chat_channel', messages)
  end

  def speak(data)
    message = data['message']
    Message.create(body: message)

    messages = { messages: Message.all.collect(&:body) }
    ChatChannel.broadcast_to('chat_channel', messages)
  end

  def load
    messages = { messages: Message.all.collect(&:body) }
    ChatChannel.broadcast_to('chat_channel', messages)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
