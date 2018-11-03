class MessagesController < ApplicationController
  def root; end

  def index
    @messages = Message.all
  end

  def create
    @message = Message.new(message_params)
    @message.save
  end

  private

  def message_params
    params.require(:message).permit(:body)
  end
end
