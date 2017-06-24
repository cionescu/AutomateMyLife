class TwilioSms
  attr_reader :client

  def initialize
    @client = Twilio::REST::Client.new
  end

  def sms body: "", to: ""
    client.account.messages.create(
      from: '+16174097366',
      to: to,
      body: body
    )
  end
end
