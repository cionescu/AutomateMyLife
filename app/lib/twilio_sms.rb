class TwilioSms
  attr_reader :client

  def initialize
    @client = Twilio::REST::Client.new
  end

  def sms
    client.account.messages.create(
      from: '+16174097366',
      to: '+40741628279',
      body: 'Te sarut!'
    )
  end
end
