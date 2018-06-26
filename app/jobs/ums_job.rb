class UmsJob < ApplicationJob
  queue_as :default

  LIZ = User.find_by(name: "Liz")

  def perform
    marks = Ums.new.run

    LIZ.metadata.keys.each do |subject|
      if marks.dig(subject, 'mark').to_i != LIZ.metadata.dig(subject, 'mark').to_i
        message = "S-au afisat notele la #{subject}. Ai luat #{marks.dig(subject, 'mark')}."
        send_message message
      else
        Rails.logger.warn "Nu s-a schimbat nimic la #{subject} | Nota #{marks.dig(subject, 'mark')}"
      end
    end

    LIZ.update!(metadata: marks)
  end

  private

  def send_message message
    if Rails.env.development?
      puts(message)
      return
    end
    [
      '+40727338573',
      # '+40741628279'
    ].each do |number|
      TwilioSms.new.sms(body: message, to: number)
    end
  end
end
