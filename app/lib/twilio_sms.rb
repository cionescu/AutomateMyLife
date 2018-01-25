class TwilioSms
  attr_reader :client

  def initialize
    @client = Twilio::REST::Client.new
  end

  def sms body: "", to: ""
    client.messages.create(
      from: Settings.twilio_phone_number,
      to: to,
      body: body
    )
  end
end
