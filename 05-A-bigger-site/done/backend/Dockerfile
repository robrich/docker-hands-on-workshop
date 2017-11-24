FROM microsoft/aspnetcore-build:2

WORKDIR /app
COPY backend.csproj .
RUN dotnet restore

COPY . /app
RUN dotnet build

ENV ASPNETCORE_URLS http://+:5000
EXPOSE 5000
CMD ["dotnet", "run"]
