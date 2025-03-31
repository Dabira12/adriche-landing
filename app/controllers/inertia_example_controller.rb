# frozen_string_literal: true

class InertiaExampleController < ApplicationController
  def index
    render inertia: 'InertiaExample', props: {
      name: params.fetch(:name, 'World'),
    }
  end

  def connected_tv
    render inertia: 'ConnectedTV'
  end

  def waitlist
    render inertia: 'Waitlist'
  end

  def contact_us
    render inertia: 'ContactUs'
  end
end
