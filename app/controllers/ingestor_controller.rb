class IngestorController < ApplicationController
    skip_before_action :verify_authenticity_token
  
    def ingest_log
      log = Log.new(log_params)
      if log.save
        render json: { status: 'success' }
      else
        render json: { status: 'error', message: 'Failed to ingest log' }, status: 500
      end
    end

    def search_logs
        query = params[:query]
        results = Log.where('message LIKE ?', "%#{query}%")
        render json: { hits: results }
      end
  
    private
  
    def log_params
      params.require(:log).permit(:level, :message, :resourceId, :timestamp, :traceId, :spanId, :commit, metadata: {})
    end
  end
  