
FROM golang:1.19-bullseye AS build

WORKDIR /app 

COPY go.mod go.sum ./

RUN go mod download

COPY . .

ARG DOCKERPORT
ENV DOCKERPORT $DOCKERPORT

RUN go build \
  -ldflags="-linkmode external -extldflags -static" \
  -tags netgo \
  -o kube-go

FROM scratch

WORKDIR /

# Copy the binary from the build stage
COPY --from=build /app/kube-go kube-go

EXPOSE $DOCKERPORT

CMD ["/kube-go"]


# docker build --build-arg DOCKERPORT=your_desired_port -t my_app_image .
