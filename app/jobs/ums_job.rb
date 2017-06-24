class UmsJob < ApplicationJob
  queue_as :default

  LIZ = User.find_by(name: "Liz")

  def perform
    marks = Ums.new.run

    LIZ.metadata.keys.each do |subject|
      if marks[subject].to_i != LIZ.metadata[subject].to_i
        message = "S-au afisat notele la #{subject}. Ai luat #{marks[subject]}."
        send_message message
      else
        Rails.logger.warn "Nu s-a schimbat nimic la #{subject} | Nota #{marks[subject]}"
      end
    end

    LIZ.update!(metadata: marks)
  end

  private

  def send_message message
    [
      '+40727338573',
      '+40741628279'
    ].each do |number|
      TwilioSms.new.sms(body: message, to: number)
    end
  end
end
