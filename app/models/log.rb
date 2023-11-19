class Log
  include Mongoid::Document
  field :level, type: String
  field :message, type: String
  field :resourceId, type: String
  field :timestamp, type: DateTime
  field :traceId, type: String
  field :spanId, type: String
  field :commit, type: String
  field :metadata, type: Hash
  include Mongoid::Timestamps


end
