FROM debian:stable-slim 

# We install the necessary packages to download and compile the code
RUN apt-get update && \
	apt-get install -y locales git build-essential python3 python3-pip && \
	rm -rf /var/lib/apt/lists/* && \
	mkdir /app

# Let's clone the repository
WORKDIR /app
ARG QORALIS_REPOSITORY=https://github.com/anku0669/qoralis-engine.git
RUN git clone "${QORALIS_REPOSITORY}" .
WORKDIR /app/c
# It's time to compile
RUN ./setup.sh && ./qoralis build

