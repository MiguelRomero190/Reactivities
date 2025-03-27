using System;
using System.Diagnostics;
using AutoMapper;
using MediatR;
using Persistence;

namespace Application.Activities.Commands;

public class DeleteActivity
{
    public class Command : IRequest
    {
        public required string Id { get; set; }
    }

    public class Handler(AppDbContext context) : IRequestHandler<Command>
    {
        async Task IRequestHandler<Command>.Handle(Command request, CancellationToken cancellationToken)
        {
            var activity = await context.Activities.FindAsync([request.Id], cancellationToken) ?? throw new Exception("Could not find activity");

            context.Remove(activity);

            await context.SaveChangesAsync(cancellationToken);
        }
    }
}
